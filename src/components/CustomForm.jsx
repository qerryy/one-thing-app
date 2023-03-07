import { ArrowRightCircleIcon } from '@heroicons/react/24/solid'

const Form = ({thing, handleInput, handleSubmit}) => {
   return (
      <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center">
         What is your "One thing"?
      </h1>

      <form onSubmit={handleSubmit} className="flex ring-4 rounded-md ring-slate-200 dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800">

         <input type="text" placeholder="Enter one thing" autoFocus maxLength={64} value={thing} onInput={handleInput} className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full" />

         <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-teal-600 hover:text-teal-600" type='submit'>
            <ArrowRightCircleIcon className="h-12 w-12 pointer-events-none"/>
         </button>
         
      </form>
      </>
   )
}

export default Form;