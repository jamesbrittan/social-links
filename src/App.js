import React, { useEffect, useState } from "react";
import { Container, Form, Label, Input, TextArea, Output, H1, Button } from "./styled";
import "./App.css"

function App() {
  const [message, setMessage] = useState("");
  const [twitter, setTwitter] = useState("");
  const [hashTags, setHashtags] = useState("");
  const [url, setUrl] = useState("");
  const [via, setVia] = useState("");
  const [related, setRelated] = useState("");

  useEffect(() => {
    console.log({ message, twitter, hashTags });
  });

  const formatCommaSeparatedList = input => {
    return input
      .split(" ")
      .join("")
      .trim();
  };

  const constructTwitterURL = () => {
    const encodedMessage = encodeURIComponent(message);

    let string = `http://twitter.com/intent/tweet?text=${encodedMessage}`;

    const formatHashTagList = hashTags
      .split(" ")
      .join("")
      .trim();
    console.log(formatHashTagList);

    if (hashTags) {
      string += `&hashtags=${formatCommaSeparatedList(hashTags)}`
    }

    if (url) {
      string += `&url=${encodeURIComponent(url)}`
    }

    if (via) {
      string += `&url=${encodeURIComponent(url)}`
    }

    if (related) {
      string += `&related=${formatCommaSeparatedList(related)}`
    }
    setTwitter(string);
  };

  const handleSubmit = e => {
    e.preventDefault();
    constructTwitterURL();
  };

  return (
    <Container className="App">
      <Form className="form" onSubmit={handleSubmit}>
        <H1>Social URL Formatter</H1>
        <Label htmlFor="text">
          <strong>Text:</strong>
          <TextArea
            value={message}
            onChange={e => setMessage(e.target.value)}
            type="text"
            required
          />
        </Label>
        <Label htmlFor="hashTags">
          <strong>HashTags:</strong>
          <Input name="hashTags" onChange={e => setHashtags(e.target.value)} />
        </Label>
        <Label htmlFor="url">
          <strong>URL:</strong>
          <Input name="url" onChange={e => setUrl(e.target.value)} />
        </Label>
        <Label htmlFor="via">
          <strong>Via:</strong>
          <Input name="via" onChange={e => setVia(e.target.value)} />
        </Label>
        <Label htmlFor="related">
          <strong>Related:</strong>
          <Input name="related" onChange={e => setRelated(e.target.value)} />
        </Label>
        <Button type="submit">Format</Button>
      </Form>

      {twitter && (
        <Output>
          <p>
            <strong>Twitter:</strong> {twitter}
          </p>
        </Output>
      )}
    </Container>
  );
}

export default App;

