import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function CaseStudy() {
    const [postContent, setPostcontent] = useState('')

    const title = window.location.pathname.split('/')[2]

    useEffect(() => {
        import(`../case-studies/${title}.md`)
            .then(res =>
                fetch(res.default)
                    .then(response => response.text())
                    .then(response => setPostcontent(response))
                    .catch(err => console.log(err))
            )
    }, [])

    return (
        <div>
            <ReactMarkdown children={postContent} remarkPlugins={[remarkGfm]} />
        </div>
    )
}
