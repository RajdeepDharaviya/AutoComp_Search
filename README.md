## React Autocomplete Search box

This is **Autocomplete search box** with the use of caching (using react state) , debouncing for performance and keyboard navigation.

### Overview

**SearchBox.jsx** is reusable component that let user to type search in search box.

**Use dumb api** for data and testing.

**Debouncing fetching :** This feature wait 500ms to after last keystroke for another keystroke if not then call that's eventually boost performance of search.

**In-Memoery Caching :** This feature stores user's previous searches and won't call api if user searches a same thing or word that's also boost performance of the search.

**Keyboard Navigation :** This feature saves some clicks of user through navigation directly by ArrowDown or ArrowUp key.

**Automatic Dropdown toggle :** This feature gives user idea about the result of searches give suggestion or upcoming result of searching.







