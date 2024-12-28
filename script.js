document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const submitButton = document.getElementById('submitButton');
    const alertContainer = document.getElementById('alertContainer');

    // Show alert function
    function showAlert(message, type = 'error') {
        // Clear existing alerts
        alertContainer.innerHTML = '';
        
        const alert = document.createElement('div');
        alert.className = `alert p-4 rounded-lg shadow-md flex items-start ${type === 'success' ? 'alert-success' : 'alert-error'}`;
        
        const icon = document.createElement('div');
        icon.className = 'flex-shrink-0 mr-3';
        icon.innerHTML = type === 'success' 
            ? '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
            : '<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>';
        
        const content = document.createElement('div');
        content.className = 'flex-1';
        content.textContent = message;

        const closeButton = document.createElement('button');
        closeButton.className = 'ml-4 flex-shrink-0 text-sm font-medium focus:outline-none';
        closeButton.innerHTML = '<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>';
        
        closeButton.onclick = () => alert.remove();

        alert.appendChild(icon);
        alert.appendChild(content);
        alert.appendChild(closeButton);
        
        alertContainer.appendChild(alert);
        
        // Trigger animation
        setTimeout(() => alert.classList.add('show'), 10);

        // Auto remove after 5 seconds
        setTimeout(() => {
            alert.classList.remove('show');
            setTimeout(() => alert.remove(), 300);
        }, 5000);
    }

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        
        // Update eye icon
        togglePassword.innerHTML = type === 'password' 
            ? '<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>'
            : '<svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>';
    });

    // Handle form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Check for empty fields
        if (!email || !password) {
            showAlert('Please fill in all fields');
            return;
        }

        // Disable submit button during processing
        submitButton.disabled = true;
        submitButton.textContent = 'Signing in...';

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message and redirect
            showAlert('Authentication successful! Redirecting...', 'success');
            
            // Simulate redirect after 2 seconds
            setTimeout(() => {
                // Add your redirect logic here
                window.location.href='redirect1.html'
            }, 2000);

        } catch (error) {
            showAlert(error.message);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Sign in';
        }
    });
});