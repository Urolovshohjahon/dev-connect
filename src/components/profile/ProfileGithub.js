import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos,username]);

  return (
    <div className='profile-github'>
      <h2 className='text-success'>GitHub Repos</h2>
      {repos === null ? (
        <Spinner />
      ) : (
        repos.map((repo, key) => (
          <div key={key} className='repo'>
            <div className='git_description' >
              <h4>
                <a href={`${repo.html_url}`} className="text-primary"  target='_blank' rel='noreferrer'>
                  {repo.name}
                </a>
              </h4>
              <p>{'repo.description'}</p>
            </div>
            <div>
              <ul>
                <li className='badge btn btn-success  '>Stars:{repo.stargazers_count}</li>
                <li className='badge btn btn-dark     '>Watchers:{repo.watchers_count}</li>
                <li className='badge btn btn-warning '>Forks: {repo.forks_count}</li>
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
