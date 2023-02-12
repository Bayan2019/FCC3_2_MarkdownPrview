import './App.css';
import { marked } from 'marked';
import * as React from 'react';

const initialState = `
# freecodecamp Solutions:
## Markdown previewer

[Project in freecodecamp.org](https://www.freecodecamp.org).

Here is an h1 tag, \`<h1></h1>\`

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>
  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

This is an example of inline code
\`\`\`
function exampleOf() {
  return multiLineCodeBlock;
}
\`\`\`

- This
- is
- an
- example
- of
- list
- items

> This is an example of block quote

![Made By Bayan](https://popsql.com/static/external-logos/freecodecamp.png)

**This is an example of Bolded Text**`;

marked.setOptions({
  breaks: true
})

class App extends React.Component {
  state = {
    text: initialState
  }
  
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  
  render() {
    const { text } = this.state;
    
    const markdown = marked(text);
    
    return (
      <div className="text-center px-4">
        <h1 className="text-center mt-4">Markdown Previewer</h1>
        <div className="row">
          <div className="col-6">
            <h6 className="text-center">Editor</h6>
            <textarea name="text"
              id="editor"
              rows="10"
              value={text}
              onChange={this.handleChange}
              className="form-control p-4"></textarea>
          </div>
          <div className="col-6">
            <h6 className="text-center">Previewer</h6>
            <div className="preview p-4" id="preview" dangerouslySetInnerHTML={{
        __html: markdown}}></div>
           </div>
        </div>
       </div>
    );
  }
}

//ReactDom.render(<App />, document.getElementById("root"));

export default App;
