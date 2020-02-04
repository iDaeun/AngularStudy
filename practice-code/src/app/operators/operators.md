# Operators

Operators = functions

1. Pipeable Operator => pure function that takes an Observable as its 'input' and returns 'another Observable'
- can be piped to Observables
- using the syntax 'observableInstance.pipe(operator())'
- ex. filter(), mergeMap()
- do not change the existing Observable instance, but return a 'new Observable' (previous Observable stays unmodified)
- subscribing to the output observable will also subscribe to the input observable
