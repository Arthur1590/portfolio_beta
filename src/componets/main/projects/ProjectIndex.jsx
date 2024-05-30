import React from 'react'
import { projectsList } from './projectsData/projectsList'
import { useParams } from 'react-router-dom'
import SectionTitle from '../../sectionTitle/SectionTitle'
import './projectsStyle.scss'

const ProjectIndex = () => {
	const { id } = useParams()
	const projectId = projectsList[id]

	return (
		<div className='main'>
			<SectionTitle
				symbol='~~>'
				title={
					projectId.projectTitle ? projectId.projectTitle : projectId.title
				}
			/>
			<div className='container'>
				<div className='project__index' key={projectId.title}>
					<article className='project__index-title'>
						<h5>
							{projectId.title}
							{'=> {'}
						</h5>
						<p>{projectId.tools}</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
							dicta explicabo temporibus facere sit eligendi quisquam illum
							harum. Rem, nesciunt.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
							dicta explicabo temporibus facere sit eligendi quisquam illum
							harum. Rem, nesciunt.
							<br />
							<br />
							<span>{'}'}</span>
						</p>
					</article>
					<figure className='project__index-desc'>
						<img
							src={projectId.img ? projectId.img : projectId.url}
							alt='ChertNodes picture'
						/>
						<p>{projectId.tools}</p>
					</figure>
				</div>
			</div>
		</div>
	)
}

export default ProjectIndex
