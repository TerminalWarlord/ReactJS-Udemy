import noProjectSelected from '../assets/no-projects.png';
import Button from './Button.jsx';

export default function NoProjects({ onStartAddProject }) {
    return <div className='mt-24 text-center w-2/3'>
        <img src={noProjectSelected} className='w-16 h-16 object-contain mx-auto' alt='Empty Task List' />
        <h2 className='text-xl font-bold text-stone-700 my-4'>No Project Selected</h2>
        <p className='text-stone-400 mb-4'>Select a project or get started with a new one</p>
        <p className='mt-8'>
            <Button onClick={onStartAddProject}>Create new project</Button>
        </p>

    </div>
}