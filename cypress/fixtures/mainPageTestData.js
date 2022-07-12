const mainPageTestData = {
    default: {
      pageTitle: 'Shop thousands of products tried and styled by real people.',
      pageText: 'Shop products across fashion, beauty, home, fitness and more. Tried and styled by real people for real life.',
      signUpBtn: 'Sign up',
      logInBtn: 'Log in',
      discoverLink: 'Discover',
      shopLink: 'Shop',
      favoritesLink: 'Favorites',
      deals: '\n          Deals\n        ',
        searchField: 'Search fashion, home, & more'
    },
    discover: {
            pathname: 'login',
            selector: '[data-msgid="Log In"]',
            text: 'Log In',
    },
    shop: {
        pathname: '/categories',
        selector: 'div>h2',
        text: 'LTK Categories',
    },

    logIn: {
            pathname: 'login',
            selector: '[data-msgid="Log In"]',
            text: 'Log In',
    },
    signIn: {
            pathname: 'login',
            selector: '[data-msgid="Sign Up"]',
            text: 'Sign Up',
    },
}

module.exports = mainPageTestData;