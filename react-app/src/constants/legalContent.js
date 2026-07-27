import { S3_BASE } from './media';

const IMG = S3_BASE.replace('/extraimages', '/images');

const contactCard = {
  type: 'contact',
  items: [
    { icon: null, text: 'CHEDI – The Organic Farm', strong: true },
    { icon: '📧', text: 'support@chedi.in', href: 'mailto:support@chedi.in' },
    { icon: '📞', text: '+91 94441 26240', href: 'tel:+919444126240' },
    { icon: '📍', text: 'Tamil Nadu, India' },
  ],
};

export const TERMS_CONTENT = {
  title: 'Terms & Conditions',
  subtitle: 'CHEDI – The Organic Farm',
  date: 'Last Updated: June 2026',
  heroImg: `${IMG}/2151294244.jpg`,
  heroAlt: 'Organic farmland',
  intro:
    'Welcome to CHEDI – The Organic Farm ("CHEDI", "we", "our", or "us"). By accessing our website, mobile application, services, memberships, farm plot programs, agricultural land services, and farmer partnership programs, you agree to the following Terms & Conditions.',
  sections: [
    {
      title: '1. Acceptance of Terms',
      blocks: [
        { type: 'p', text: 'By using our website, mobile application, or participating in any CHEDI program, you agree to comply with these Terms & Conditions.' },
        { type: 'p', text: 'If you do not agree, please discontinue the use of our services.' },
      ],
    },
    {
      title: '2. Services Offered',
      blocks: [
        { type: 'p', text: 'CHEDI provides:' },
        { type: 'subsection', title: 'Community Supported Agriculture (CSA)', items: ['Farm Club Membership', 'Dedicated Farm Plot Program', 'Weekly Vegetable Delivery', 'Organic Produce Supply'] },
        { type: 'subsection', title: 'Agri-Land Services', items: ['Agricultural Land Purchase', 'Agricultural Land Lease', 'Land Partnership Programs'] },
        { type: 'subsection', title: 'Farmer-Growth Programs', items: ['Organic Farming Support', 'Organic Seed Distribution', 'Organic Manure Support', 'Technical Guidance', 'Market Linkages'] },
        { type: 'subsection', title: 'Projects', items: ['Farm Plot Selection', 'Farm Plot Reservation', 'Agricultural Development Projects'] },
      ],
    },
    {
      title: '3. Membership',
      blocks: [
        { type: 'p', text: 'Membership grants access to selected CHEDI services.' },
        { type: 'p', text: 'Membership benefits may include:' },
        { type: 'list', items: ['App access', 'Farm monitoring', 'Plot reservation eligibility', 'CSA subscriptions', 'Delivery services'] },
        { type: 'p', text: 'CHEDI reserves the right to modify membership benefits at any time.' },
      ],
    },
    {
      title: '4. CSA Subscription',
      blocks: [
        { type: 'p', text: 'CSA subscriptions are based on agricultural production cycles.' },
        { type: 'p', text: 'Members acknowledge that:' },
        { type: 'list', items: ['Crop yields vary by season.', 'Vegetable quantities may vary due to weather conditions.', 'Natural farming depends on environmental factors.', 'Certain vegetables may be substituted with equivalent organic produce.'] },
        { type: 'p', text: 'CHEDI will make reasonable efforts to ensure continuity of supply.' },
      ],
    },
    {
      title: '5. Farm Plot Program',
      blocks: [
        { type: 'p', text: 'CSA farm plots are leased exclusively for cultivation purposes.' },
        { type: 'p', text: 'Members acknowledge that:' },
        { type: 'list', items: ['Plot ownership is not transferred.', 'Plot selection is subject to availability.', 'Agricultural outcomes cannot be guaranteed.', 'Farm operations remain under CHEDI management.'] },
        { type: 'p', text: 'Reserved plots are allocated according to the selected membership plan.' },
      ],
    },
    {
      title: '6. Agricultural Risks',
      blocks: [
        { type: 'p', text: 'Agriculture is subject to risks including:' },
        { type: 'list', items: ['Climate conditions', 'Rainfall variations', 'Floods', 'Drought', 'Pest attacks', 'Natural disasters'] },
        { type: 'p', text: 'CHEDI shall not be held liable for unavoidable agricultural losses caused by such events.' },
      ],
    },
    {
      title: '7. Payments',
      blocks: [
        { type: 'p', text: 'All payments must be made through approved payment methods.' },
        { type: 'p', text: 'Payments may include:' },
        { type: 'list', items: ['Membership Fees', 'Subscription Fees', 'Delivery Charges', 'Plot Reservation Charges'] },
        { type: 'p', text: 'Failure to complete payments may result in suspension of services.' },
      ],
    },
    {
      title: '8. Refund Policy',
      blocks: [
        { type: 'p', text: 'Membership fees are generally non-refundable.' },
        { type: 'p', text: "Refund requests may be considered only under exceptional circumstances and at CHEDI's discretion." },
        { type: 'p', text: 'Approved refunds may be subject to administrative deductions.' },
      ],
    },
    {
      title: '9. Delivery Services',
      blocks: [
        { type: 'p', text: 'Delivery schedules are based on harvest cycles and logistics availability.' },
        { type: 'p', text: 'CHEDI is not responsible for delays caused by:' },
        { type: 'list', items: ['Weather conditions', 'Transportation disruptions', 'Natural disasters', 'Government restrictions'] },
        { type: 'p', text: 'Reasonable efforts will be made to notify members of delays.' },
      ],
    },
    {
      title: '10. Land Acquisition & Lease Programs',
      blocks: [
        { type: 'p', text: 'Landowners participating in:' },
        { type: 'list', items: ['Land Sales', 'Land Leases', 'Land Partnerships'] },
        { type: 'p', text: 'must provide:' },
        { type: 'list', items: ['Valid ownership documentation', 'Clear title records', 'Required government approvals'] },
        { type: 'p', text: 'CHEDI reserves the right to reject any land proposal that does not meet operational requirements.' },
      ],
    },
    {
      title: '11. Farmer Partnership Program',
      blocks: [
        { type: 'p', text: 'Farmer participants agree to:' },
        { type: 'list', items: ['Follow organic cultivation guidelines', 'Use approved agricultural inputs', 'Maintain quality standards', 'Cooperate with technical support teams'] },
        { type: 'p', text: 'CHEDI may suspend participation for violations of program standards.' },
      ],
    },
    {
      title: '12. Intellectual Property',
      blocks: [
        { type: 'p', text: 'All website content including:' },
        { type: 'list', items: ['Logos', 'Text', 'Graphics', 'Images', 'Software', 'Branding'] },
        { type: 'p', text: 'remain the exclusive property of CHEDI.' },
        { type: 'p', text: 'Unauthorized reproduction or distribution is prohibited.' },
      ],
    },
    {
      title: '13. Limitation of Liability',
      blocks: [
        { type: 'p', text: 'CHEDI shall not be liable for:' },
        { type: 'list', items: ['Indirect losses', 'Consequential damages', 'Loss of profits', 'Crop failures caused by natural events', 'Delays beyond reasonable control'] },
        { type: 'p', text: 'Users participate in services understanding the inherent nature of agricultural activities.' },
      ],
    },
    {
      title: '14. Modification of Services',
      blocks: [
        { type: 'p', text: 'CHEDI reserves the right to:' },
        { type: 'list', items: ['Update services', 'Modify programs', 'Change pricing', 'Improve operational processes'] },
        { type: 'p', text: 'without prior notice.' },
      ],
    },
    {
      title: '15. Governing Law',
      blocks: [
        { type: 'p', text: 'These Terms shall be governed by the laws of India.' },
        { type: 'p', text: 'Any disputes shall be subject to the jurisdiction of courts located in Tamil Nadu, India.' },
      ],
    },
    {
      title: '16. Contact Information',
      blocks: [contactCard],
    },
  ],
};

export const PRIVACY_CONTENT = {
  title: 'Privacy Policy',
  subtitle: 'CHEDI – The Organic Farm',
  date: 'Last Updated: June 2026',
  heroImg: `${S3_BASE}/316.jpg`,
  heroAlt: 'Organic farm landscape',
  intro:
    'At CHEDI, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data.',
  sections: [
    {
      title: '1. Information We Collect',
      blocks: [
        { type: 'p', text: 'We may collect:' },
        { type: 'subsection', title: 'Personal Information', items: ['Full Name', 'Phone Number', 'Email Address', 'Address', 'City', 'State', 'Postal Code'] },
        { type: 'subsection', title: 'Account Information', items: ['Membership Details', 'Subscription Details', 'Plot Reservations', 'Payment Records'] },
        { type: 'subsection', title: 'Technical Information', items: ['Device Information', 'Browser Type', 'IP Address', 'Website Usage Data'] },
      ],
    },
    {
      title: '2. How We Use Information',
      blocks: [
        { type: 'p', text: 'We use information to:' },
        { type: 'list', items: ['Process memberships', 'Manage subscriptions', 'Deliver vegetables', 'Allocate farm plots', 'Improve customer service', 'Send service notifications', 'Process payments', 'Improve our website and app'] },
      ],
    },
    {
      title: '3. Information Sharing',
      blocks: [
        { type: 'p', text: 'We do not sell personal information.' },
        { type: 'p', text: 'Information may be shared with:' },
        { type: 'subsection', title: 'Service Providers', items: ['Payment processors', 'Delivery partners', 'Technical support providers'] },
        { type: 'subsection', title: 'Legal Authorities', text: 'When required by law or government regulations.' },
      ],
    },
    {
      title: '4. Data Protection',
      blocks: [
        { type: 'p', text: 'We implement reasonable security measures including:' },
        { type: 'list', items: ['Secure servers', 'Access controls', 'Data encryption where applicable', 'Regular monitoring'] },
        { type: 'p', text: 'While we strive to protect data, no online system can guarantee absolute security.' },
      ],
    },
    {
      title: '5. Cookies',
      blocks: [
        { type: 'p', text: 'Our website may use cookies to:' },
        { type: 'list', items: ['Improve functionality', 'Analyze traffic', 'Enhance user experience'] },
        { type: 'p', text: 'Users may disable cookies through browser settings.' },
      ],
    },
    {
      title: '6. Communications',
      blocks: [
        { type: 'p', text: 'By using our services, you consent to receive:' },
        { type: 'list', items: ['Service notifications', 'Membership updates', 'Delivery alerts', 'Important operational announcements'] },
        { type: 'p', text: 'Users may opt out of promotional communications at any time.' },
      ],
    },
    {
      title: '7. Data Retention',
      blocks: [
        { type: 'p', text: 'We retain information only for:' },
        { type: 'list', items: ['Operational purposes', 'Legal compliance', 'Financial record keeping'] },
        { type: 'p', text: 'Information is deleted when no longer required, subject to applicable laws.' },
      ],
    },
    {
      title: '8. User Rights',
      blocks: [
        { type: 'p', text: 'Users may request:' },
        { type: 'list', items: ['Access to personal information', 'Correction of inaccurate data', 'Deletion of eligible information', 'Withdrawal of consent where applicable'] },
        { type: 'p', text: 'Requests may be submitted through our contact channels.' },
      ],
    },
    {
      title: '9. Third-Party Links',
      blocks: [
        { type: 'p', text: 'Our website may contain links to third-party websites.' },
        { type: 'p', text: 'CHEDI is not responsible for the privacy practices of external websites.' },
      ],
    },
    {
      title: "10. Children's Privacy",
      blocks: [
        { type: 'p', text: 'Our services are not directed toward children under 18 years of age.' },
        { type: 'p', text: 'We do not knowingly collect personal information from minors.' },
      ],
    },
    {
      title: '11. Changes to Privacy Policy',
      blocks: [
        { type: 'p', text: 'We may update this Privacy Policy periodically.' },
        { type: 'p', text: 'Updated versions will be posted on this page with a revised effective date.' },
      ],
    },
    {
      title: '12. Contact Us',
      blocks: [
        { type: 'p', text: 'For privacy-related inquiries:' },
        contactCard,
      ],
    },
  ],
};
