import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import '../styles/Projects.css';

const GITHUB_USERNAME = process.env.REACT_APP_GH_USER || 'MCarlos7';
const GITHUB_TOKEN = process.env.REACT_APP_GH_TOKEN;

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoad] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const resp = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, 
          GITHUB_TOKEN ? { headers: { Authorization: `token ${GITHUB_TOKEN}` } } : {} 
        );
        if (!resp.ok) throw new Error(`GitHub returned: ${resp.status}`);
        const data = await resp.json();
        data.sort((a, b) => b.stargazers_count - a.stargazers_count); // ⭐ first
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoad(false);
      }
    };
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger" className="text-center">
          Error loading repos: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container id="projects" className="mb-5">
      <h2 className="text-center mb-4" style={{ fontWeight: '700', letterSpacing: '1.2px' }}>
        All Projects
      </h2>
      <Row className="justify-content-center g-4">
        {repos.map(repo => (
          <Col key={repo.id} xs={12} md={6} lg={4}>
            <Card
              className="project-card h-100 shadow-sm border-0"
              style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
              onClick={() => window.open(repo.html_url, '_blank')}
              onKeyDown={e => e.key === 'Enter' && window.open(repo.html_url, '_blank')}
              tabIndex={0}
              role="link"
              aria-label={`Open GitHub repository ${repo.name}`}
            >
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-3" style={{ fontWeight: '600' }}>{repo.name}</Card.Title>
                <Card.Text className="flex-grow-1 text-secondary" style={{ minHeight: '80px' }}>
                  {repo.description || 'No description available.'}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center border-0 bg-white pt-0">
                <small className="text-muted">{repo.stargazers_count} ⭐</small>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={e => {
                    e.stopPropagation();
                    window.open(repo.html_url, '_blank', 'noopener,noreferrer');
                  }}
                  aria-label={`Visit repository ${repo.name}`}
                >
                  View Repo
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;