document.addEventListener('DOMContentLoaded', () => {
    console.log('Admin Panel initialized');
    
    // Sidebar navigation
    const menuItems = document.querySelectorAll('.sidebar-menu li');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('page-title');
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active from all menu items
            menuItems.forEach(mi => mi.classList.remove('active'));
            
            // Add active to clicked item
            item.classList.add('active');
            
            // Show corresponding page
            const pageName = item.dataset.page;
            pages.forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageName).classList.add('active');
            
            // Update title
            pageTitle.textContent = item.textContent.trim();
        });
    });
    
    // Modal handling
    const modal = document.getElementById('product-modal');
    const btnAdd = document.querySelector('.btn-add');
    const btnCancel = document.querySelector('.btn-cancel');
    
    if (btnAdd) {
        btnAdd.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }
    
    if (btnCancel) {
        btnCancel.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    // Logout
    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }
    
    // Delete buttons
    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Yakin ingin menghapus produk ini?')) {
                btn.closest('tr').remove();
            }
        });
    });
    
    // Edit buttons
    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Fitur edit akan segera hadir!');
        });
    });
});
