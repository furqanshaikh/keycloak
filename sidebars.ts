import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  trainingSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Course Introduction',
    },

    {
      type: 'category',
      label: 'Module 1: Keycloak Fundamentals',
      items: [
        'module-01/overview',
        'module-01/concepts',
        'module-01/lab-1-1',
        'module-01/lab-1-2',
        'module-01/assessment',
      ],
    },

    {
      type: 'category',
      label: 'Module 2: Realm Management',
      items: [
        'module-02/overview',
        'module-02/realm-settings',
        'module-02/client-configuration',
        'module-02/labs',
        'module-02/assessment',
      ],
    },

    {
      type: 'category',
      label: 'Module 3: User Federation',
      items: [
        'module-03/overview',
        'module-03/ldap',
        'module-03/custom-user-spi',
        'module-03/labs',
        'module-03/assessment',
      ],
    },

    {
      type: 'category',
      label: 'Module 4: Authentication & MFA',
      items: [
        'module-04/overview',
        'module-04/authentication-flows',
        'module-04/mfa',
        'module-04/custom-authenticator',
        'module-04/labs',
      ],
    },

    {
      type: 'category',
      label: 'Module 5: Identity Brokering',
      items: [
        'module-05/overview',
        'module-05/social-login',
        'module-05/saml',
        'module-05/account-linking',
      ],
    },

    {
      type: 'category',
      label: 'Module 6: Authorization',
      items: [
        'module-06/overview',
        'module-06/authorization-services',
        'module-06/uma',
        'module-06/abac',
      ],
    },

    {
      type: 'category',
      label: 'Production & Operations',
      items: [
        'module-08/ha-deployment',
        'module-09/monitoring',
        'module-11/performance',
        'module-12/security-hardening',
      ],
    },

    {
      type: 'category',
      label: 'Capstone Project',
      items: [
        'capstone/overview',
        'capstone/requirements',
        'capstone/evaluation',
      ],
    },
  ],
};

export default sidebars;
