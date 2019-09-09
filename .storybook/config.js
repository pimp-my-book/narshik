import { configure } from '@storybook/react'

function loadStories() {
    const req = require.context('../src', true, /.story.js$/)
    req.keys().forEach(req)

}

configure(loadStories, module)