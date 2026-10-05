const fs = require('fs');

const jsonFile = 'data/templates.json';
let data = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));

// The new info
const newPhone = "+1 000000000";
const newEmail = "info@xyz.com";
const newAddress = "123 Main St, New York, NY, USA";

// Update ContactSection
const contactData = data.categories.Webservice.sections.contact?.variants?.WebserviceContact1;
if (contactData) {
  contactData.contactInfo.phone = newPhone;
  contactData.contactInfo.email = newEmail;
  contactData.contactInfo.address = newAddress;
  contactData.mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.1444874457788!3d40.69766374865766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
}

// Update TopBar
const topbar = data.categories.Webservice.sections.TopBar?.variants?.WebserviceTopBar1;
if (topbar) {
  if (topbar.contactInfo) {
    if (topbar.contactInfo.find(c => c.type === 'phone')) {
      topbar.contactInfo.find(c => c.type === 'phone').text = newPhone;
    }
    if (topbar.contactInfo.find(c => c.type === 'email')) {
      topbar.contactInfo.find(c => c.type === 'email').text = newEmail;
    }
    if (topbar.contactInfo.find(c => c.type === 'location')) {
      topbar.contactInfo.find(c => c.type === 'location').text = newAddress;
    }
  }
}

// Update Footer
const footer = data.common.Footer;
if (footer && footer.contact) {
  footer.contact.email = newEmail;
  footer.contact.phone = newPhone;
  footer.contact.address = newAddress;
}

fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2));
console.log('Updated contact info in templates.json');
