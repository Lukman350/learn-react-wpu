/* eslint-disable react/prop-types */
export default function Header({ name }) {
  return <h1>Hello {name ?? 'Anonymous'}, Welcome to Belajar React!</h1>;
}