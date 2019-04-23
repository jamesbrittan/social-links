import styled from "styled-components";

const variables = {
  colours: {
    black: "#181f1c",
    blue: "#96bbbb",
    red: "#f64740",
    white: "#fafafa",
    pink1: "#f7baa1",
    pink2: "#ff9e99",
  },
  fonts: {
    mono: "'Inconsolata', monospace",
    sans: "'Ubuntu', sans-serif",
    heading: "'Damion', cursive",
  },
  padding: "0.8rem",
  marginTop: "1.2rem",
  inputFontSize: "1.2rem",
  borderRadius: "0.1rem",
  spacing: {
    "xl": "2.25em",
    "l": "1.5em",
    "m": "1em",
    "s": "0.667em"
  }
}

export const H1 = styled.h1`
  font-family: ${variables.fonts.heading};
  font-size: 5.063em;
  color: white;
  text-align: center;
`


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
  font-family: ${variables.fonts.sans};
  background-color: ${variables.colours.pink1};
  background-image: linear-gradient(to bottom right, ${variables.colours.pink1}, ${variables.colours.pink2});
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  max-width: 960px;
  margin: 0 auto;
  padding: ${variables.spacing.m};

`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* width: 80%; */
  margin-bottom: ${variables.spacing.l};
  color: ${variables.colours.white};
`

export const Input = styled.input`
  border-radius: ${variables.borderRadius};
  border: none;
  padding: ${variables.spacing.s};
  margin-top: ${variables.spacing.s};
  font-size: ${variables.inputFontSize};
  font-family: ${variables.fonts.mono};
`

export const TextArea = styled.textarea`
  padding: ${variables.spacing.s};
  margin-top: ${variables.spacing.s};
  border-radius: ${variables.borderRadius};
  resize: none;
  font-size: ${variables.inputFontSize};
  border: none;
`

export const Button = styled.button`
  display: inline-block;
  border-radius: ${variables.borderRadius};
  padding: ${variables.spacing.m} 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  cursor: pointer;
  font-size: ${variables.inputFontSize};

  &:hover {
    background: white;
    font-weight: bold;
    color: ${variables.colours.pink2};
    transition: 0.4s;
  }

`

export const Output = styled.div`
  padding: ${variables.spacing.s};
  border-radius: ${variables.borderRadius};
  background: ${variables.colours.white};
  width: 85%;
  max-width: 960px;
  margin: 0 auto;
  padding: ${variables.spacing.m};
`