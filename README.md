# LambdaGetSiteInfo

JSON Object fetched.

{ address: '3000 Main St.',
  hours: '9: 00 AM - 5: 00 PM Mon - Fri',
  phone: '1 800 555 7777',
  email: 'anthony@ledesma.tech'
}

  Response out of Lambda.

{ statusCode: 200,
  body: '{
        "address": "3000 Main St.",
        "hours": "9:00 AM - 5:00 PM Mon - Fri",
        "phone": "1 800 555 7777",
        "email": "anthony@ledesma.tech"
    }'
}