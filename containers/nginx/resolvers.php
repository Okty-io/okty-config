<?php

function max_upload_size($value)
{
    return !empty($value) ? "client_max_body_size $value;" : '';
}

function root_folder($value)
{
    if (empty($value)) {
        return '/usr/share/nginx/html';
    }

    return '/usr/share/nginx/html/' . $value;
}

function php_container_link($value)
{
    if (empty($value)) {
        return '';
    }

    return <<<EOT
    location ~ \.php$ {
        fastcgi_pass   ${value}:9000;
        fastcgi_index  index.php;
        fastcgi_param  SCRIPT_FILENAME  \$document_root\$fastcgi_script_name;
        include        fastcgi_params;
    };
EOT;
}
