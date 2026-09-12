// ===== DATA =====
const roles = {
  learner: {
    name: 'Learner',
    description: 'See your progress, check-ins, and support resources',
    icon: '📚'
  },
  educator: {
    name: 'Educator',
    description: 'Monitor your class, identify students needing support',
    icon: '👨‍🏫'
  },
  guardian: {
    name: 'Guardian',
    description: 'Simple updates on your child\'s progress and wellbeing',
    icon: '👨‍👩‍👧'
  }
};

const dashboardData = {
  learner: {
    name: 'Lindiwe B.',
    initials: 'LB',
    role: 'Learner · Grade 10',
    stats: [
      { label: 'Check-ins', value: 3 },
      { label: 'Needs Attention', value: 1 }
    ],
    activity: [
      { subject: 'Attendance', timestamp: 'Last 2 weeks', status: 'steady' },
      { subject: 'Mathematics Check-in', timestamp: 'Yesterday', status: 'watch' },
      { subject: 'Reading Log Update', timestamp: '3 days ago', status: 'steady' },
      { subject: 'English Assignment', timestamp: '5 days ago', status: 'steady' },
      { subject: 'Science Participation', timestamp: '1 week ago', status: 'steady' }
    ],
    supportTitle: 'Talk to Someone',
    supportDescription: 'Need to chat with a counselor or trusted adult? Your request is private and safe.'
  },
  educator: {
    name: 'Ms. Dlamini',
    initials: 'MD',
    role: 'Educator · Grade 10 English & History',
    stats: [
      { label: 'Class Size', value: 28 },
      { label: 'Flagged for Support', value: 5 }
    ],
    students: [
      { name: 'Lindiwe B.', class: 'Grade 10', status: 'watch', note: 'Mathematics score dip' },
      { name: 'Themba K.', class: 'Grade 10', status: 'attention', note: 'Attendance declining' },
      { name: 'Amara T.', class: 'Grade 10', status: 'watch', note: 'Engagement in class' },
      { name: 'Sipho M.', class: 'Grade 10', status: 'attention', note: 'Assignment submission' },
      { name: 'Naledi J.', class: 'Grade 10', status: 'watch', note: 'Homework completion' }
    ],
    supportTitle: 'Reach Out',
    supportDescription: 'Connect with the school counselor or support team to discuss a student's wellbeing.'
  },
  guardian: {
    name: 'Mr. & Mrs. Mtsweni',
    initials: 'MS',
    role: 'Guardian',
    stats: [
      { label: 'Children', value: 1 },
      { label: 'Updates This Week', value: 2 }
    ],
    child: {
      name: 'Lindiwe B., Grade 10',
      metrics: [
        { label: 'Attendance', value: 'Good (95%)' },
        { label: 'Recent Check-in', value: 'Mathematics – needs support' },
        { label: 'Wellbeing', value: 'Stable' },
        { label: 'Last Contact', value: '3 days ago' }
      ]
    },
    supportTitle: 'Message the School',
    supportDescription: 'Have questions? Reach out to your child\'s teachers or school support team in simple language.'
  }
};

// ===== STATE =====
let currentRole = 'learner';

// ===== RENDER =====
function renderApp() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderTopBar()}
    ${renderHero()}
    ${renderRoleSelector()}
    ${renderDashboard()}
  `;
}

function renderTopBar() {
  return `
    <div class="top-bar">
      <div class="logo">
        <span class="logo-icon">❄️</span>
        <span>The Flake</span>
      </div>
      <div class="privacy-badge">
        <div>South African schools · POPIA-aware by design</div>
        <div>Demo data shown throughout</div>
      </div>
    </div>
  `;
}

function renderHero() {
  return `
    <div class="hero">
      <h1 class="hero-headline">Every learner is unique. Every flake matters.</h1>
      <h2 class="hero-subheading">See the signs. Support sooner.</h2>
      <p class="hero-description">
        Choose how you're signing in. This is a working preview — pick a role to explore the dashboards built for that person.
      </p>
    </div>
  `;
}

function renderRoleSelector() {
  const cards = Object.entries(roles)
    .map(
      ([key, role]) => `
        <div class="role-card ${key === currentRole ? 'active' : ''}" onclick="switchRole('${key}')">
          <div class="role-card-icon">${role.icon}</div>
          <div class="role-card-title">${role.name}</div>
          <div class="role-card-description">${role.description}</div>
        </div>
      `
    )
    .join('');

  return `
    <div class="role-selector-container">
      <div class="role-selector-heading">Switch role</div>
      <div class="role-cards">
        ${cards}
      </div>
    </div>
  `;
}

function renderDashboard() {
  const data = dashboardData[currentRole];

  if (currentRole === 'learner') {
    return renderLearnerDashboard(data);
  } else if (currentRole === 'educator') {
    return renderEducatorDashboard(data);
  } else if (currentRole === 'guardian') {
    return renderGuardianDashboard(data);
  }
}

function renderLearnerDashboard(data) {
  const statsHtml = data.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <div class="stat-value">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `
    )
    .join('');

  const activityHtml = data.activity
    .map(
      (item) => `
        <div class="activity-item">
          <div class="activity-content">
            <div class="activity-subject">${item.subject}</div>
            <div class="activity-timestamp">${item.timestamp}</div>
          </div>
          <div class="status-badge status-${item.status}">${item.status === 'steady' ? '✓ Steady' : '⚠ Watch'}</div>
        </div>
      `
    )
    .join('');

  return `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <div class="welcome-section">
          <div class="avatar">${data.initials}</div>
          <div class="welcome-text">
            <div class="welcome-greeting">Welcome back, ${data.name}.</div>
            <div class="user-info">${data.role}</div>
          </div>
        </div>
      </div>

      <div class="stats-row">
        ${statsHtml}
      </div>

      <div class="activity-section">
        <div class="activity-list">
          <div class="activity-list-heading">Your recent activity</div>
          ${activityHtml}
        </div>
        <div class="support-panel">
          <div class="support-panel-heading">${data.supportTitle}</div>
          <div class="support-panel-description">${data.supportDescription}</div>
          <button class="btn-support">Request a check-in</button>
        </div>
      </div>
    </div>
  `;
}

function renderEducatorDashboard(data) {
  const statsHtml = data.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <div class="stat-value">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `
    )
    .join('');

  const studentsHtml = data.students
    .map(
      (student) => `
        <div class="student-item">
          <div class="activity-content">
            <div class="student-name">${student.name}</div>
            <div class="student-class">${student.class} · ${student.note}</div>
          </div>
          <div class="status-badge status-${student.status}">${student.status === 'watch' ? '⚠ Watch' : '⚠ Attention'}</div>
        </div>
      `
    )
    .join('');

  return `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <div class="welcome-section">
          <div class="avatar">${data.initials}</div>
          <div class="welcome-text">
            <div class="welcome-greeting">Welcome back, ${data.name}.</div>
            <div class="user-info">${data.role}</div>
          </div>
        </div>
      </div>

      <div class="stats-row">
        ${statsHtml}
      </div>

      <div class="activity-section">
        <div class="student-list">
          <div class="activity-list-heading">Students flagged for support</div>
          ${studentsHtml}
        </div>
        <div class="support-panel">
          <div class="support-panel-heading">${data.supportTitle}</div>
          <div class="support-panel-description">${data.supportDescription}</div>
          <button class="btn-support">Connect with support team</button>
        </div>
      </div>
    </div>
  `;
}

function renderGuardianDashboard(data) {
  const statsHtml = data.stats
    .map(
      (stat) => `
        <div class="stat-card">
          <div class="stat-value">${stat.value}</div>
          <div class="stat-label">${stat.label}</div>
        </div>
      `
    )
    .join('');

  const metricsHtml = data.child.metrics
    .map(
      (metric) => `
        <div class="child-metric">
          <span class="child-metric-label">${metric.label}</span>
          <span class="child-metric-value">${metric.value}</span>
        </div>
      `
    )
    .join('');

  return `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <div class="welcome-section">
          <div class="avatar">${data.initials}</div>
          <div class="welcome-text">
            <div class="welcome-greeting">Welcome, ${data.name}.</div>
            <div class="user-info">${data.role}</div>
          </div>
        </div>
      </div>

      <div class="stats-row">
        ${statsHtml}
      </div>

      <div class="activity-section">
        <div>
          <div class="guardian-child-card">
            <div class="child-name">${data.child.name}</div>
            ${metricsHtml}
          </div>
          <div class="support-panel">
            <div class="support-panel-heading">${data.supportTitle}</div>
            <div class="support-panel-description">${data.supportDescription}</div>
            <button class="message-button">Send a message</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== INTERACTION =====
function switchRole(role) {
  currentRole = role;
  renderApp();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', renderApp);
