const YamlValidator = require('yaml-validator');

const options = {
  structure: {
    school: {
      'description?': 'string', //Optional, won't show in invalid array
      code: 'number',
      principal: {
        name: 'string'
      },
      classRooms: [
        {
          name: 'string',
          id: 'number',
          'location?':{        
            floor: "string",
            building: "string",
          }
        }
      ],
      teachers: [
        'string'
      ]
    }
  }
};

const files = [
  'file paths',
  'that exists',
  'somewhere',
  'and are Yaml files'
];

const validator = new YamlValidator(options);
validator.validate(files);
validator.report();