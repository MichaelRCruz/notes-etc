const myFunc = ({pop, crackle, snap}) => ({pop, crackle, snap})
(myFunc)(this.state);

. . .

const myFunc = {pop, crackle, snap}) => ({pop, crackle, snap}
(myFunc)(this.state);

. . .

const myState = this.state;
const myFunc = ({pop, crackle, snap}) => {
  return {pop, crackle, snap};
}
myFunc(myState);

. . .

const myState = this.state
const myFunc = props => {
  const { pop, crackle, snap } = props;
  return {pop, crackle, snap};
}
myFunc(myState);

. . .

this.state = {
  pop: 'sup, world',
  crackle: 'michaelcruz.io',
  snap: 'functional programming'
};
const myState = this.state;
const myFunc = props => {
  return props;
};
myFunc(myState);
