// import { scalarType } from 'nexus';
// import { GraphQLError } from 'graphql';
// import * as FileType from 'file-type';

// export const Upload = scalarType({
//   name: 'Upload',
//   asNexusMethod: 'upload',
//   serialize: () => {
//     throw new GraphQLError('Upload serialization unsupported.');
//   },
//   parseValue: async (value) => {
//     const upload = await value;
//     const stream = upload.createReadStream();
//     const fileType = await FileType.fromStream(stream);

//     if (!fileType?.mime !== upload.mimetype) {
//       throw new GraphQLError('Mime type does not match file content.');
//     }

//     console.log(upload);

//     return upload;
//   },
//   parseLiteral: (ast) => {
//     throw new GraphQLError('Upload literal unsupported.', ast);
//   }
// })
