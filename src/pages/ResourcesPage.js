import React from 'react';

function ResourcesPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>量子计算资源</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <a href="https://qiskit.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#43a047' }}>
            Qiskit 教程
          </a>
        </li>
        <li>
          <a href="https://www.quantumcomputing.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#43a047' }}>
            量子计算入门视频
          </a>
        </li>
        <li>
          <a href="https://arxiv.org/list/quant-ph/recent" target="_blank" rel="noopener noreferrer" style={{ color: '#43a047' }}>
            arXiv 量子物理论文
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ResourcesPage;