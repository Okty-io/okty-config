<?php

function php_extensions($value)
{
    if (empty($value)) {
        return '';
    }

    $peclMapping = ['apcu', 'xdebug'];

    $packagesMapping = [
        'intl' => 'libicu-dev',
        'soap' => 'libxml2-dev',
        'xsl' => 'libxslt-dev',
        'gd' => 'libpng-dev libjpeg-dev'
    ];

    $dependencies = $extensions = $pecl = [];
    foreach (split(',', $value) as $ext) {
        $ext = trim($ext);

        if (in_array($ext, $peclMapping)) {
            $pecl[] = $ext;

            continue;
        }

        $extensions[] = $ext;
        if (isset($packagesMapping[$ext])) {
            $dependencies[] = $packagesMapping[$ext];
        }
    }

    $outputPecl = implode(' ', $pecl);
    $outputDependencies = implode(' ', $dependencies);
    $outputExtensions = implode(' ', $extensions);

    $cmd = '';
    if (!empty($pecl)) {
        $cmd .= <<<EOT
RUN pecl install ${outputPecl}
RUN docker-php-ext-enable ${outputPecl}
EOT;
    }

    $cmd .= <<<EOT
RUN apt-get update && apt-get install -y ${$outputDependencies} && apt-get clean
RUN docker-php-ext-install ${$outputExtensions}
EOT;

    if (in_array('gd', $extensions)) {
        $cmd .= <<<EOT
RUN docker-php-ext-configure gd --with-jpeg-dir=/usr/include/
EOT;
    }

    return $cmd;
}