const supabaseUrl = 'https://apgnisedyxwstpoibijh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZ25pc2VkeXh3c3Rwb2liaWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIyMTUyOTYsImV4cCI6MjA4Nzc5MTI5Nn0.0QxDuS0OL2qWeKANb99iPJTMnuJ1YP2XdWmTrwN-Tx8';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

const loginForm = document.querySelector('form'); // Adjust selector to match your form

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get values from your specific IDs
    const email = document.getElementById('username').value; // Supabase uses email/password
    const password = document.getElementById('password').value;

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert("Login failed: " + error.message);
    } else {
        window.location.href = 'dashboard.html'; // Redirect on success
    }
});
