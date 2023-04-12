import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {

    return (
        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
                projectId='cd00c32c-eaf8-4ef5-810e-d311700243f7'
                username='props.user.username'
                secret='props.user.secret'
                style={{ height: '100%' }}
            />
        </div>
    )
}
export default ChatsPage



const chatProps = useMultiChatLogic('cd00c32c-eaf8-4ef5-810e-d311700243f7', props.user.username, props.user.secret)