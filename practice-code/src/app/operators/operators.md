# Operators

Operators = functions

1. Pipe

1-1) Pipeable Operator => pure function that takes an Observable as its 'input' and returns 'another Observable'
- can be piped to Observables
- using the syntax 'observableInstance.pipe(operator())'
- ex. filter(), mergeMap()
- do not change the existing Observable instance, but return a 'new Observable' (previous Observable stays unmodified)
- subscribing to the output observable will also subscribe to the input observable

1-2) Creating custom observables(use 'pipe()' function to make new operators)
- https://angular.io/guide/rx-library
- combine multiple functions into a single function => return a new function
- need tp call 'subscribe()' to produce a result through the recipe

1-3) use pipe() function to define the operation in a shorter form
- pipe() = method on the RxJS Observable
- if there are many pipeable operators :
op4()(op3()(op2()(op1()(obs)))) => unreadable
=> pipe() can make it readable
- even if there is only 1 operator, obs.pipe(op()) is preferred
