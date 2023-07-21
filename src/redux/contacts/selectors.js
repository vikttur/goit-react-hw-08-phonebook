export const selectLoading = state => state.contacts.loading;
export const selectFilter = state => state.contacts.filter;
export const selectAllContacts = state => state.contacts.items;

export const selectContactsList = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectContactsFilter = state => state.filters;