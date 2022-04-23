export class Stack<T> {
  private data: T[] = [];

  push(element: T) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  read() {
    return this.data[this.data.length - 1];
  }

  size() {
    return this.data.length;
  }
}

export class Linter {
  private stack = new Stack<string>();

  lint(text: string) {
    for (const char of text) {
      if (this.isOpeningBrace(char)) {
        this.stack.push(char);
      } else if (this.isClosingBrace(char)) {
        const popOpeningBrace = this.stack.pop();
        if (!popOpeningBrace) return `${char} doesn't have opening brace`;
        if (this.isNotMatching(popOpeningBrace, char)) return `${char} has mismatched opening brace`;
      }
    }

    const popElement = this.stack.read();
    if (popElement) return `${popElement} doesn't have closing brace`;

    return true;
  }

  private isOpeningBrace(char: string) {
    return ['(', '[', '{'].includes(char);
  }

  private isClosingBrace(char: string) {
    return [')', ']', '}'].includes(char);
  }

  private isNotMatching(openingBrace: string, closingBrace: string) {
    return closingBrace !== { '(': ')', '[': ']', '{': '}' }[openingBrace];
  }
}
