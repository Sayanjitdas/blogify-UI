// Import React dependencies.
import React, { useMemo, useState, useCallback } from 'react'
// Import the Slate editor factory.
import { createEditor,Editor,Transforms,Text } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'



export default function SlateEditor() {
    const editor = useMemo(() => withReact(createEditor()), [])
    // Keep track of state for the value of the editor.
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'Write here....' }],
        },
    ])

    //subheading
    const BoldText = props => {
        return (
            <p className="fw-bold" {...props.attributes}>{props.children}</p>
        )
    }

    const CodeElement = props => {
        return (
                <pre className="text-muted fw-bold bg-dark font-monospace" {...props.attributes}>
                    <code className="">{props.children}</code>
                </pre>
        )
    }
    
    const codeBlockHandler = (e) => {
        e.preventDefault()
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'code',
        })
        Transforms.setNodes(
            editor,
            {type: match ? 'paragraph' : 'code'},
            {match: n => Editor.isBlock(editor,n)}
        )
    }

    const boldHandler = (e) => {
        e.preventDefault()
        const [match] = Editor.nodes(editor, {
            match: n => n.type === 'b',
        })
        Transforms.setNodes(
            editor,
            {bold:true},
            { match: n => Text.isText(n), split: true }
        )
    }

    const paragraphHandler = (e) => {
        e.preventDefault()
        Transforms.setNodes(
            editor,
            {type: 'default'},
            {match: n => Editor.isBlock(editor,n)}
        )
    }
    
    const DefaultElement = props => {
        return <p {...props.attributes}>{props.children}</p>
    }

    // Define a rendering function based on the element passed to `props`. We use
    // `useCallback` here to memoize the function for subsequent renders.
    const renderElement = useCallback(props => {
        switch (props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            case 'b':
                return <BoldText  {...props} />
            
            default:
                return <DefaultElement {...props} />
        }
    }, [])

    
    return (
        <div>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2 mb-4" role="group" aria-label="First group">
                    <button type="button" className="btn btn-sm btn-outline-success" onClick={boldHandler}>Bold</button>
                    <button type="button" className="btn btn-sm btn-outline-success" onClick={paragraphHandler}>p</button>
                    {/* <button type="button" className="btn btn-sm btn-outline-success" onClick={codeBlockHandler}>code</button> */}
                </div>
            </div>
            <Slate
                editor={editor}
                value={value}
                onChange={newValue => {setValue(newValue); localStorage.setItem('content',JSON.stringify(value))}}
            >
                <Editable
                    renderElement={renderElement}
                />
            </Slate>
        </div>
    )
}