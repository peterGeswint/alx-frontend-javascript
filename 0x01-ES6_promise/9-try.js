export default function guardrail(mathFunction) {
  const queue = []; // Step 1: Create the queue array

  try {
    // Step 2: Try executing the mathFunction and push the result to queue
    const result = mathFunction();
    queue.push(result); // If successful, add the result
  } catch (error) {
    // Step 2: Catch any errors and push the error message to queue
    queue.push(error.message); // If an error occurs, add the error message
  }

  // Step 3: Always add this message to the queue
  queue.push('Guardrail was processed');

  // Step 4: Return the queue
  return queue;
}
