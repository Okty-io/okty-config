module.exports = {
    max_upload_size: function (value) {
        return value ? `client_max_body_size ${value};` : '';
    },

    root_folder: function (value) {
        if (!value) {
            return '/usr/share/nginx/html';
        }

        return `/usr/share/nginx/html/${value}`;
    },

    php_container_link: function (value) {
        if (!value) {
            return value;
        }

        return `
            location ~ \.php$ {
                fastcgi_pass   ${value}:9000;
                fastcgi_index  index.php;
                fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
                include        fastcgi_params;
            }
        `;
    }
};
