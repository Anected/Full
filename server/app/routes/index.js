const express = require('express');
const route = express();
import routes from './Users';

route.use('/api',routes);

export default route;