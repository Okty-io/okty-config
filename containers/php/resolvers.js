module.exports = {
    php_extensions: function (value) {
        if (!value) {
            return '';
        }

        const peclMapping = [
            'apcu',
            'xdebug'
        ];

        const packageMapping = [
            {ext: 'intl', value: 'libicu-dev'},
            {ext: 'soap', value: 'libicu-dev'},
            {ext: 'xsl', value: 'libxml2-dev'},
            {ext: 'gd', value: 'libpng-dev libjpeg-dev'}
        ];

        const dependencies = [];
        const extensions = [];
        const pecl = [];

        for (let ext of value.split(',')) {
            ext = ext.trim();

            if (peclMapping.includes(ext)) {
                pecl.push(ext);

                continue;
            }

            extensions.push(ext);

            const packageRequired = packageMapping.find((element) => element.ext === ext);
            if (packageRequired) {
                dependencies.push(packageRequired.value);
            }
        }

        const outputPecl = pecl.join(' ');
        const outputDependencies = dependencies.join(' ');
        const outputExtensions = extensions.join(' ');

        let cmd = '';

        if (outputPecl) {
            cmd += `RUN pecl install ${outputPecl}\n`;
            cmd += `RUN docker-php-ext-enable ${outputPecl}\n`;
        }

        if (outputDependencies) {
            cmd += `RUN apt-get update && apt-get install -y ${outputDependencies} && apt-get clean\n`;
        }

        if (outputExtensions) {
            cmd += `RUN docker-php-ext-install ${outputExtensions}\n`;
        }

        if (extensions.includes('gd')) {
            cmd += `RUN docker-php-ext-configure gd --with-jpeg-dir=/usr/include\n`;
        }

        return cmd;
    },
};

console.log(module.exports.php_extensions('dba,bcmath,calendar'));