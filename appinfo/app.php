<?php
namespace OCA\NewsPlugin\AppInfo;
use OCP\App;

if (App::isEnabled('news') && class_exists('OCA\News\Plugin\Client\Plugin')) {
    \OCA\News\Plugin\Client\Plugin::registerScript('news_indieweb', 'script');
    \OCA\News\Plugin\Client\Plugin::registerStyle('news_indieweb', 'style');
}
