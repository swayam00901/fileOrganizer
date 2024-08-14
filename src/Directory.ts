class Directory {
  name: string;
  children: Map<string, Directory>;

  constructor(name: string) {
	this.name = name;
	this.children = new Map();
  }

  addChild(name: string): Directory {
	if (!this.children.has(name)) {
	  const child = new Directory(name);
	  this.children.set(name, child);
	  return child;
	}
	return this.children.get(name)!;
  }

  removeChild(name: string): boolean {
    const removed = this.children.delete(name);
    return removed;
  }

  getChild(name: string): Directory | undefined {
	return this.children.get(name);
  }

  list(indent: string = ''): string {
    let result = indent + this.name + '\n';
    const sortedChildren = [...this.children.values()].sort((a, b) => a.name.localeCompare(b.name));
    for (const child of sortedChildren) {
        result += child.list(indent + '  ');
    }
    return result;
  }

  private sortChildren(): void {
	const sortedChildren = new Map([...this.children.entries()].sort());
	this.children = sortedChildren;
  }
}

export default Directory;