import './pages.scss'
import {DocsCard} from '../Components'

const AllDocs = () => {


    const documentationListContent = [
        {id:0, projName:'PROJECT NAME FOR THE API 1', projDesc:'proj desc for the api … PROJECT NAME FOR THE API …. proj desc for the api … PROJECT NAME FOR THE API …. proj desc for the api … PROJECT NAME FOR THE API …. proj desc for the api … PROJECT NAME ', editLink:'/documents/:docId', finalLink:'/documents/final/:docId'},
        {id:1, projName:'PROJECT NAME FOR THE API 2', projDesc:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arut odit aut fugit', editLink:'/documents/:docId', finalLink:'/documents/final/:docId'},
        {id:2, projName:'PROJECT NAME FOR THE API 3', projDesc:'quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreheill', editLink:'/documents/:docId', finalLink:'/documents/final/:docId'},
        {id:3, projName:'PROJECT NAME FOR THE API 4', projDesc:'m fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat fsdger', editLink:'/documents/:docId', finalLink:'/documents/final/:docId'},
        {id:4, projName:'PROJECT NAME FOR THE API 5', projDesc:'a est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusand', editLink:'/documents/:docId', finalLink:'/documents/final/:docId'},
        {id:5, projName:'PROJECT NAME FOR THE API 6', projDesc:'s et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident', editLink:'/documents/:docId', finalLink:'/documents/final/:docId'}
    ]

    return (
        <div className='container'>
            {documentationListContent.map(({id, projName, projDesc, editLink}) => <DocsCard key={id} projName={projName} projDesc={projDesc} editLink={editLink} />)}
        </div>
    )
}

export default AllDocs