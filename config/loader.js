let path = require('path');

let resolve = path.resolve;

let styleLoader = {
  loader: 'style-loader',
  options: {
    sourceMap: true
  }
};

// css
let cssLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    modules: false,
    importLoaders: 1
  }
};

let moduleCSSLoader = {
  loader: 'css-loader',
  options: {
    sourceMap: true,
    modules: true,
    camelCase: 'only',
    importLoaders: 1,
    localIdentName: '[name]__[local]___[hash:base64:8]'
  }
};

let lessLoader = {
  loader: 'less-loader'
};

// postcss
let postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    config: {
      path: path.join(__dirname, './postcss.config.js')
    }
  }
};

function getCSSLoaders (modules) {
  return [styleLoader, modules ? moduleCSSLoader : cssLoader, postCSSLoader]
}

function getLessLoaders (modules) {
    return  [styleLoader, modules ? moduleCSSLoader : cssLoader, postCSSLoader, lessLoader]
        
}

exports.css = () => {
  return {
    test: /\.css$/,
    exclude: /\.m\.css$/,
    oneOf: [
      {
        resourceQuery: /m/,
        use: getCSSLoaders(true)
      },
      {
        use: getCSSLoaders(false)
      }
    ]
  };
};

exports.less = () => {
    return {
        test: /\.less$/,
        exclude: /\.m\.less$/,
        oneOf: [
            {
                resourceQuery: /m/,
                use: getLessLoaders(true)
            },
            {
                use: getLessLoaders(false)
            }
        ]
    };
};

exports.cssModules = () => {
  return {
    test: /\.m\.css$/,
    use: getCSSLoaders(true)
  };
};

exports.lessModules = () => {
  return {
    test: /\.m\.less$/,
      use: getLessLoaders(true)
  }

};



// babel
exports.babel = () => {
  return {
    test: /\.jsx?$/,
    include: resolve('components'),
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        babelrc: true
      }
    }
  };
};

// images
exports.images = (opt = {}) => {
  return {
    test: /\.(png|jpe?g|gif|webp|ico)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: opt.filename || 'images/[name].[hash:8].[ext]'
        }
      },
    ].filter(p => p)
  };
};

// fonts
exports.fonts = (opt = {}) => {
  return {
    test: /\.(woff(2)?|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)??$/,
    loader: 'url-loader',
    options: {
      limit: 8124,
      name: opt.filename || 'fonts/[name].[hash:8].[ext]'
    }
  };
};

// media
exports.medias = (opt = {}) => {
  return {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 3000,
      name: opt.filename || 'medias/[name].[hash:8].[ext]'
    }
  };
};
