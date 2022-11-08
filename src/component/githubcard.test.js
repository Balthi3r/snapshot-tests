import GitHubCard from "./githubcard";
import render from 'react-test-renderer'

test('renders a snapshot', () => {
    const tree= render.create(<GitHubCard/>).toJSON()
    expect(tree).toMatchSnapshot
})