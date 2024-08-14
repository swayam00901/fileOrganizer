import Directory from './Directory';

class FileSystem {
    root: Directory;

    constructor() {
        this.root = new Directory('');
    }

    create(path: string): string {
        const parts = path.split('/');
        let current = this.root;
        for (const part of parts) {
            current = current.addChild(part);
        }
        return `CREATE ${path}`;
    }

    move(src: string, dest: string): string {
        const srcParts = src.split('/');
        const destParts = dest.split('/');
        const srcName = srcParts.pop()!;
        const destName = destParts.pop()!;

        let srcDir = this.root;
        for (const part of srcParts) {
            srcDir = srcDir.getChild(part)!;
        }

        let destDir = this.root;
        for (const part of destParts) {
            destDir = destDir.getChild(part)!;
        }

        const dirToMove = srcDir.getChild(srcName);
        if (dirToMove) {
            srcDir.removeChild(srcName);
            destDir.addChild(destName).children.set(srcName, dirToMove);
            return `MOVE ${src} ${dest}`;
        }
        return `Cannot move ${src} to ${dest}`;
    }

    delete(path: string): string {
        const parts = path.split('/');
        const name = parts.pop()!;

        let current = this.root;
        for (const part of parts) {
            current = current.getChild(part)!;
        }

        if (current !== null && !current?.removeChild(name)) {
            return `Cannot delete ${path} - ${parts.join('/')} does not exist`;
        }
        return `DELETE ${path}`;
    }

    list(): string {
        return 'LIST\n' + this.root.list();
    }
}

export default FileSystem;