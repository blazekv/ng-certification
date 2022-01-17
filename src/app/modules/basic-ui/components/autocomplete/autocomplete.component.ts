import { ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AutocompleteItem } from '../../model/autocomplete-item';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutocompleteComponent),
      multi: true,
    },
  ],
})
export class AutocompleteComponent implements OnInit, ControlValueAccessor {
  @Input()
  label?: string;

  @Input()
  labelKey: string = 'name';

  @Input()
  valueKey: string = 'id';

  @Input()
  maxVisibleItems: number = 20;

  selected: any;

  @Input()
  set items(items: any[] | null) {
    if (items) {
      const sortedItems = [...items].sort(this.sorter(this.labelKey));
      this.filteredItems = sortedItems
        .map(item => this.mapToAutocompleteItem(item))
        .slice(0, this.maxVisibleItems);
      this._items = sortedItems;
    }
  }

  showAutocomplete = false;
  filteredItems: AutocompleteItem[] = [];
  form: FormGroup;

  onChange: (value: any) => void = () => {};
  onTouched: (value: any) => void = () => {};

  private _items: any[] = [];
  private hideSubscription?: Subscription;

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef) {
    this.form = this.createForm();
  }

  ngOnInit(): void {
    this.form
      .get('search')
      ?.valueChanges.pipe()
      .subscribe(text => {
        this.showAutocomplete = true;
        this.onChange(undefined);
        this.filterItems(text);
      });
  }

  writeValue(obj: any): void {}

  getPrefix(name: string, search: string) {
    return name.indexOf(search);
  }

  fill(item: AutocompleteItem) {
    this.form.patchValue({ search: item.name });
    this.showAutocomplete = false;
    this.onChange(item.value);
  }

  enableAutocomplete() {
    this.showAutocomplete = true;
    if (this.hideSubscription) {
      this.hideSubscription.unsubscribe();
    }
  }

  hideWithDelay() {
    this.hideSubscription = timer(1000).subscribe(() => {
      this.showAutocomplete = false;
      this.cd.markForCheck();
    });
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private createForm() {
    return this.fb.group({
      search: [''],
    });
  }

  private filterItems(text: string) {
    const searchTextLowerCase = text.toLocaleLowerCase();
    this.filteredItems = this._items
      .filter(item => {
        if (item[this.labelKey] && typeof item[this.labelKey] === 'string') {
          return item[this.labelKey].toLocaleLowerCase().indexOf(searchTextLowerCase) >= 0;
        } else {
          return false;
        }
      })
      .map(item => this.mapToAutocompleteItem(item, searchTextLowerCase))
      .slice(0, this.maxVisibleItems);
  }

  private mapToAutocompleteItem(item: any, searchTextLowerCase = '') {
    const name = item[this.labelKey];
    const startIndex = name.toLocaleLowerCase().indexOf(searchTextLowerCase);
    return {
      name: name,
      value: item[this.valueKey],
      prefix: name.substr(0, startIndex),
      searched: name.substr(startIndex, searchTextLowerCase.length),
      suffix: name.substr(startIndex + searchTextLowerCase.length, name.length),
    };
  }

  private sorter(labelKey: string) {
    return (a: any, b: any) => {
      if (
        a[labelKey] &&
        typeof a[labelKey] === 'string' &&
        b[labelKey] &&
        typeof b[labelKey] === 'string'
      ) {
        return a[labelKey].localeCompare(b[labelKey]);
      }
    };
  }
}
