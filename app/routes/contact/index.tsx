import type { Route } from './+types';

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();
//   const name = formData.get('name') as string;
//   const email = formData.get('email') as string;
//   const subject = formData.get('subject') as string;
//   const message = formData.get('message') as string;

//   const errors: Record<string, string> = {};

//   if (!name) errors.name = 'Name is required';
//   if (!email) {
//     errors.email = 'Email is required';
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = 'Email is invalid format';
//   }
//   if (!subject) errors.subject = 'Subject is required';
//   if (!message) errors.message = 'Message is required';

//   if (Object.keys(errors).length > 0) {
//     return { errors };
//   }

//   const data = {
//     name,
//     email,
//     subject,
//     message,
//   };

//   return { message: 'Form submitted successfully', data };
// }

function ContactPage({ actionData }: Route.ComponentProps) {
  return (
    <div className='max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-700'>
      <h2 className='text-3xl font-bold text-white mb-8 text-center'>
        📥 Contact Me
      </h2>

      <form
        action='https://formspree.io/f/mnngyypd'
        method='post'
        className='space-y-6'
      >
        <div>
          <label
            htmlFor='name'
            className='block text-sm font-medium text-white'
          >
            Full Name
          </label>
          <input
            name='name'
            type='text'
            id='name'
            className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
          />
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-sm font-medium text-white'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
          />
        </div>
        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-white'
          >
            Subject
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
          />
        </div>
        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-white'
          >
            Message:
          </label>
          <textarea
            rows={6}
            id='message'
            name='message'
            className='w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100'
          />
        </div>
        <button className='w-full bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white py-2 rounded-lg'>
          Send message
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
