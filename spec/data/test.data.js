(function() {
  'use strict';

  module.exports = {
    sslNames: {
      featured: [
        'EV SSL', 'EV Multi-Domain SSL', 'PositiveSSL', 'PositiveSSL Multi-Domain',
        'PositiveSSL Wildcard', 'EssentialSSL', 'InstantSSL',
        'EssentialSSL Wildcard', 'InstantSSL Pro', 'PremiumSSL',
        'Unified Communications', 'PremiumSSL Wildcard', 'Multi-Domain SSL'
      ],
      cheapest: [
        'PositiveSSL', 'EssentialSSL', 'PositiveSSL Multi-Domain',
        'InstantSSL', 'InstantSSL Pro', 'PremiumSSL', 'Multi-Domain SSL',
        'Unified Communications', 'EV SSL', 'PositiveSSL Wildcard',
        'EssentialSSL Wildcard', 'PremiumSSL Wildcard', 'EV Multi-Domain SSL'
      ],

      personal: [
        'PositiveSSL', 'PositiveSSL Multi-Domain', 'PositiveSSL Wildcard'
      ],

      personalMultiDomain: ['PositiveSSL Multi-Domain']
    },
    sslPrices: {
      cheapest: [
        '499', '2499', '2598', '2799', '4299', '5699', '7722', '7722', '7899',
        '13899', '8499', '9499', '12999', '15788', '21589'
      ]
    },
    emails: {
      invalid: [
        "plainaddress",
        "email.domain.com",
        "@domain.com",
        "#@%^%#$@#$@#.com",
        "Joe Smith <email@domain.com>",
        "email@domain.com (Joe Smith)",
        "email@domain@domain.com",
        ".email@domain.com",
        "email.@domain.com",
        "email..email@domain.com",
        "あいうえお@domain.com",
        "email@-domain.com",
        "email@.domain.com",
        // "email@111.222.333.44444", FIXME: this address is considered valid. Need investigation
        "email@domain..com"
      ]
    }
  }
})();
