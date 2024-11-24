const formData = document.querySelector('.form') as HTMLFormElement | null;
const results = document.querySelector('.form__feedback') as HTMLElement | null;

function contactForm() {
  const handleFormSubmit = async (event: Event) => {
    event.preventDefault();
    console.log('RESULTS', results);

    if (!formData || !results) {
      console.error('Form or results element not found');
      return;
    }

    const data = new FormData(event.target as HTMLFormElement);
    const object: { [key: string]: FormDataEntryValue } = {};
    data.forEach((value, key) => {
      console.log('herrrrrr', object[key], value, data);
      object[key] = value;
    });

    if (object.email !== object.email2) {
      results.innerHTML = 'Your email addresses are not matching!';
      console.log(object, 'object');
    } else {
      delete object.email2;
      const json = JSON.stringify(object);
      console.log('json', json);
      results.innerHTML = 'Please wait...';

      try {
        const response = await fetch(
          'https://my-portfolio-backend.onrender.com/contact-form',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: json,
          }
        );
        if (response.ok) {
          results.innerHTML = 'Your message has been sent! Thank You, we will get back to you soon!';
          formData.reset();
        } else {
          results.innerHTML = 'There was an error sending your message.';
        }
      } catch (error) {
        console.error('Error:', error);
        results.innerHTML = 'There was an error sending your message.';
      }
    }
  };

  if (formData) {
    formData.addEventListener('submit', handleFormSubmit);
  }
}

export default contactForm;
 



// ### Summary of Changes when firl converted to typescript form js:
// 1. **Type Annotations**: Added type annotations for 

// event

// , 

// formData

// , and 

// results

// .
// 2. **Null Checks**: Added null checks for 

// formData

//  and 

// results

//  to ensure they exist before proceeding.
// 3. **Type Casting**: Used type casting to specify the types of 

// formData

//  and 

// results

// .

// This TypeScript version ensures type safety and better error handling.

// Similar code found with 1 license type