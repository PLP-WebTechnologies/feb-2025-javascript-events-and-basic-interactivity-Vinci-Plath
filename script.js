document.addEventListener('DOMContentLoaded', function() {
    // Product Gallery Interaction
    const productCards = document.querySelectorAll('.product-card');
    const productDetails = document.getElementById('product-details');
    
    const productInfo = {
        'product-1': {
            title: 'Organic Cotton Tee',
            description: 'Made with 100% GOTS-certified organic cotton. Saves 2,168 liters of water compared to conventional cotton.',
            price: '$34.99',
            impact: 'Saves 46% CO2 emissions',
            image: 'path/to/image1.jpg' // Add product images if needed
        },
        'product-2': {
            title: 'Bamboo Leggings',
            description: 'Crafted from sustainable bamboo fibers that require no pesticides and minimal water to grow.',
            price: '$49.99',
            impact: 'Biodegradable and uses 80% less water',
            image: 'path/to/image2.jpg' // Add product images if needed
        },
        'product-3': {
            title: 'Recycled Denim',
            description: 'Made from post-consumer denim waste, reducing textile landfill contribution.',
            price: '$59.99',
            impact: 'Uses 87% less water than new denim',
            image: 'path/to/image3.jpg' // Add product images if needed
        }
    };
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.id;
            const info = productInfo[productId];
            
            productDetails.innerHTML = `
                <div class="fade-in">
                    <h3>${info.title}</h3>
                    <p>${info.description}</p>
                    <p><strong>Price:</strong> ${info.price}</p>
                    <p class="impact-highlight">🌱 ${info.impact}</p>
                    <img src="${info.image}" alt="${info.title}" class="product-image" />
                </div>
            `;
            
            // Highlight selected product
            productCards.forEach(c => c.style.border = '1px solid #ddd');
            this.style.border = `2px solid ${getComputedStyle(this).getPropertyValue('--eco-green')}`;
        });
    });
    
    // Accordion Functionality
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.accordion-item').forEach(el => {
                el.classList.remove('active');
            });
            
            // Open current if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
            
            // Rotate icon
            const icon = this.querySelector('i');
            document.querySelectorAll('.accordion-btn i').forEach(i => {
                i.classList.remove('fa-chevron-up');
                i.classList.add('fa-chevron-down');
            });
            
            if (!isActive) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
        });
    });
    
    // Impact Calculator
    const calculatorBox = document.querySelector('.calculator-box');
    const impactBtn = document.getElementById('impact-btn');
    const impactResults = document.getElementById('impact-results');
    
    const impactStats = [
        "By choosing sustainable fabrics, you save approximately 2,000 liters of water per garment.",
        "Organic cotton reduces CO2 emissions by 46% compared to conventional cotton.",
        "Recycled materials prevent textile waste from ending up in landfills.",
        "Sustainable fashion brands pay workers fair wages in safe conditions."
    ];
    
    calculatorBox.addEventListener('mouseover', function() {
        const randomStat = impactStats[Math.floor(Math.random() * impactStats.length)];
        this.innerHTML = `<p>${randomStat}</p>`;
        this.style.backgroundColor = '#c8e6c9';
    });
    
    calculatorBox.addEventListener('mouseout', function() {
        this.innerHTML = '<p>Hover to see how choosing sustainable fashion makes a difference!</p>';
        this.style.backgroundColor = 'var(--light-green)';
    });
    
    impactBtn.addEventListener('click', function() {
        const savings = {
            water: Math.floor(Math.random() * 5000) + 1000,
            co2: Math.floor(Math.random() * 20) + 10,
            waste: Math.floor(Math.random() * 10) + 5
        };
        
        impactResults.innerHTML = `
            <h3>Your Potential Annual Impact</h3>
            <p>💧 Saves ${savings.water} liters of water</p>
            <p>🌍 Reduces ${savings.co2}kg of CO2 emissions</p>
            <p>🗑️ Prevents ${savings.waste}kg of textile waste</p>
            <p>Keep making sustainable choices!</p>
        `;
        
        impactResults.style.display = 'block';
        impactResults.classList.add('fade-in');
    });
    
    // Form Validation
    const newsletterForm = document.getElementById('newsletter-form');
    const formSuccess = document.getElementById('form-success');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Validate name
        const nameInput = document.getElementById('name');
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Please enter your name');
            isValid = false;
        } else {
            clearError(nameInput);
        }
        
        // Validate email
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(emailInput);
        }
        
        // Validate interest
        const interestSelect = document.getElementById('interest');
        if (interestSelect.value === '') {
            showError(interestSelect, 'Please select an interest');
            isValid = false;
        } else {
            clearError(interestSelect);
        }
        
        if (isValid) {
            // Simulate form submission
            setTimeout(() => {
                newsletterForm.reset();
                formSuccess.innerHTML = `
                    <p>Thank you for joining our sustainable fashion movement!</p>
                    <p>We've sent a confirmation to ${emailInput.value}</p>
                `;
                formSuccess.style.display = 'block';
                formSuccess.classList.add('fade-in');
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.style.display = 'none';
                }, 5000);
            }, 1000);
        }
    });
    
    // Real-time validation
    document.getElementById('email').addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            showError(this, 'Please enter a valid email address');
        } else {
            clearError(this);
        }
    });
    
    // Secret Easter Egg (double click)
    const secretBtn = document.getElementById('secret-btn');
    const secretMessage = document.createElement('div');
    secretMessage.className = 'secret-message';
    secretMessage.innerHTML = `
        <h3>🌿 Secret Sustainable Tip! 🌿</h3>
        <p>Wash clothes in cold water and air dry to save energy and make your garments last longer!</p>
        <button id="close-secret" class="eco-btn">Thanks!</button>
    `;
    document.body.appendChild(secretMessage);
    
    secretBtn.addEventListener('dblclick', function() {
        secretMessage.style.display = 'block';
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.id === 'close-secret') {
            secretMessage.style.display = 'none';
        }
    });
    
    // Helper functions
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        input.style.borderColor = '#d32f2f';
    }
    
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.textContent = '';
        errorMessage.style.display = 'none';
        input.style.borderColor = '#ddd';
    }
});
