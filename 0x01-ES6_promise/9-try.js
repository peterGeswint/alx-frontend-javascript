export default function guardrail(mathFunction) {
  const queue = []; // Initialize the queue

  try {
    const result = mathFunction(); // Execute the math function
    queue.push(result); // Append the result to the queue
  } catch (error) {
    queue.push(error.message); // Append error message to the queue
  } finally {
    queue.push('Guardrail was processed'); // Always append this message
  }

  return queue; // Return the queue
}
