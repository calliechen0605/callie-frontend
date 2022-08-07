import PropTypes from 'prop-types';

/**
 *  display / hide other components
 * -css control whether to display -- components cache
 * -- uninstall component without cache
 */

const Display = ({
  visible,
  isMounted,
  children,
}) => (
  <div style={{ display: visible ? 'block' : 'none' }}>
    {(!isMounted || visible) && children}
  </div>
);

Display.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  isMounted: PropTypes.bool.isRequired,
};

export default Display;
