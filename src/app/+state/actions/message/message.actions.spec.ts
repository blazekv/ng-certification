import { MESSAGE_ACTIONS } from './message.actions';

describe('yMessages', () => {
  it('should return an action', () => {
    expect(MESSAGE_ACTIONS.message({ message: 'test' }).type).toBe('[Message] Show message');
  });
});
