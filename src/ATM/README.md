# atm-js

Write a function that implements an ATM. There are unlimited quantities of 500€, 200€, 100€, 50€, 20€ and 10€ banknotes. The algorithm aims at delivering the lowest quantity of banknotes.

Here is an example:

```javascript
atm(270); // 1 x 200€, 1 x 50€ and 1 x 20€ banknotes
```

Further develoments:

- Allow a user to choose their banknotes (e.g.: 270€ = 5 x 50€ + 20€)
- Handle a limited stock of banknotes
- Verify the cardholder's PIN code
- Verify the availability of funds
