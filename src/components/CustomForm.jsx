import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'
const Form = ({thing, handleInput, handleSumbmit}) => {
    return (
        <>
        <h1 className='text-3xl font-bold sm:text-6xl text-center'> Hello, React!</h1>
          <form 
          className='flex items-center justify-center ring-4 rounded-md ring-slate-200
          dark:ring-slate-700 ring-offset-2 ring-offset-slate-300 dark:ring-offset-slate-800
          focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200
          '
          onSubmit={handleSumbmit}
          >
            <input type='text' className='bg-inherit rounded-md font-sans
            text-slate-800 py-2 px-6 focus:outline-none text-sm sm:text-base placeholder:text-slate-500
            create-teal-600 appearance-none w-full
            '
            placeholder='Enter your something here'
            autoFocus
            maxLength="64"
            // value={count}
            value={thing}
            onInput={handleInput}
            />
            <button className='bg-inherit rounded-md font-sans
            text-slate-800 py-2 px-6 focus:outline-none focus:text-text-600 hover:bg-teal-600
            '>
              <ArrowRightCircleIcon className='h-10 w-10 text-slate-900 dark:text-slate-100 pointer-events-none' />
            </button>

          </form>
        </>
    )
}

export default Form;